<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;


class OauthControllers extends Controller
{
    public function redirectOauth () {
        return Socialite::driver('google')->redirect();
    }

    public function callbackOauth () {
        $googleUser = Socialite::driver('google')->user();
        $registeredUser = User::where('google_id', $googleUser->id)->first();
        if (!$registeredUser) {
            $user = User::updateOrCreate([
                'google_id' => $googleUser->id,
            ], [
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'password' => Hash::make(Str::random(24)),
                'google_token' => $googleUser->token,
                'google_refresh_token' => $googleUser->refreshToken,
            ]);
            Auth::login($user);
            return redirect('/dashboard');
        }

        Auth::login($registeredUser);

        return redirect('/dashboard');
    }

}

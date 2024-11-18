<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class LoginController extends Controller
{
   public function login(Request $request)
   {
      $user = User::where('email', $request->email)->first();

      if (Hash::check($request->password, $user->password)) {
         $token = $user->createToken('authToken')->plainTextToken;
         return response()->json(['token' => $token], 200);
      }

      return response()->json(['error' => 'Unauthorized'], 401);
   }
}

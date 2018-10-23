<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use App\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $categories = Category::all();
        $users = User::all();

        return response()->json([
            'products'   => $products,
            'categories' => $categories,
            'users' => $users
            ], 200);
    }
}

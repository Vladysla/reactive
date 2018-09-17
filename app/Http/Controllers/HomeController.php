<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $categories = Category::all();

        return response()->json([
            'products'   => $products,
            'categories' => $categories
            ], 200);
    }
}

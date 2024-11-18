<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InicioCarrosselImage;

class InicioCarrosselImagesController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $images = InicioCarrosselImage::all();
        return response()->json($images);
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        // Validação do arquivo
        $request->validate([
            'imagem' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Salvar a imagem
        if ($request->hasFile('imagem') && $request->file('imagem')->isValid()) {
            // Gerar um nome único para a imagem
            $imageName = time() . '.' . $request->imagem->extension();
            
            // Mover a imagem para a pasta 'images' dentro de 'storage/app/public'
            $path = $request->imagem->storeAs('images', $imageName, 'public');

            // Criar o item no banco de dados
            $image = InicioCarrosselImage::create([
                'imagem' => $path,  // Salvar o caminho da imagem no banco
            ]);

            return response()->json($image, 201);
        }

        return response()->json(['message' => 'Imagem inválida ou não enviada'], 400);
    }

    // Display the specified resource.
    public function show($id)
    {
        $image = InicioCarrosselImage::find($id);
        if (is_null($image)) {
            return response()->json(['message' => 'Image not found'], 404);
        }
        return response()->json($image);
    }

    // Update the specified resource in storage.
    public function update(Request $request, $id)
    {
        $request->validate([
            'imagem' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $image = InicioCarrosselImage::find($id);
        if (is_null($image)) {
            return response()->json(['message' => 'Image not found'], 404);
        }

        if ($request->hasFile('imagem') && $request->file('imagem')->isValid()) {
            $imageName = time() . '.' . $request->imagem->extension();
            $path = $request->imagem->storeAs('images', $imageName, 'public');
            $image->update(['imagem' => $path]);
        }

        return response()->json($image);
    }

    // Remove the specified resource from storage.
    public function destroy($id)
    {
        $image = InicioCarrosselImage::find($id);
        if (is_null($image)) {
            return response()->json(['message' => 'Image not found'], 404);
        }

        $image->delete();
        return response()->json(['message' => 'Image deleted successfully']);
    }
}
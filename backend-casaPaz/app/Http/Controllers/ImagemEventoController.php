<?php

namespace App\Http\Controllers;

use App\Models\ImagemEvento;
use Illuminate\Http\Request;

class ImagemEventoController extends Controller
{
    public function index()
    {
        $imagens = ImagemEvento::all();
        return response()->json($imagens);
    }

    public function store(Request $request, $id)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imageName = time().'.'.$request->image->extension();  
        $request->image->storeAs('public/images', $imageName);

        $imageUrl = 'images/' . $imageName;

        // Use the ImagemEvento model and an event_id foreign key
        $imagemEvento = new ImagemEvento();
        $imagemEvento->evento_id = $id;
        $imagemEvento->url = $imageUrl;
        $imagemEvento->save();

        return response()->json(['success' => 'Image uploaded successfully', 'url' => $imageUrl], 200);
    }

    public function show($id)
    {
        // Ensure the ID is an integer
        $id = (int) $id;

        $imagemEvento = ImagemEvento::find($id);

        if (!$imagemEvento) {
            return response()->json(['message' => 'Image not found'], 404);
        }

        return response()->json($imagemEvento);
    }

    public function update(Request $request, $evento_id, $id)
    {
        $request->validate([
            'url' => 'array',
            'url.*' => 'string',
        ]);

        $imagem = ImagemEvento::findOrFail($id);
        $data = $request->all();
        $data['evento_id'] = $evento_id;

        if (isset($data['url'])) {
            $imagem->update(['evento_id' => $evento_id, 'url' => $data['url'][0]]);
        } else {
            $imagem->update($data);
        }

        return response()->json($imagem);
    }

    public function destroy($id)
    {
        $imagem = ImagemEvento::findOrFail($id);
        $imagem->delete();
        return response()->json(null, 204);
    }

    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $file = $request->file('file');
        $path = $file->store('public/images');

        $imagemEvento = ImagemEvento::create(['url' => str_replace('public/', '', $path)]);

        return response()->json($imagemEvento, 201);
    }
}
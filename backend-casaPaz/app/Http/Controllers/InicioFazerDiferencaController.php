<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InicioFazerDiferenca;

class InicioFazerDiferencaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = InicioFazerDiferenca::all();
        return response()->json($items);
    }

    /**
     * Store a newly created resource in storage.
     */
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
            $item = InicioFazerDiferenca::create([
                'imagem' => $path,  // Salvar o caminho da imagem no banco
            ]);
    
            return response()->json($item, 201);
        }
    
        return response()->json(['message' => 'Imagem inválida ou não enviada'], 400);
    }
    

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $item = InicioFazerDiferenca::find($id);
        if (is_null($item)) {
            return response()->json(['message' => 'Item not found'], 404);
        }
        return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'imagem' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $item = InicioFazerDiferenca::find($id);
        if (is_null($item)) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        if ($request->hasFile('imagem') && $request->file('imagem')->isValid()) {
            $imageName = time() . '.' . $request->imagem->extension();
            $path = $request->imagem->storeAs('images', $imageName, 'public');
            $item->update(['imagem' => $path]);
        }

        return response()->json($item);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = InicioFazerDiferenca::find($id);
        if (is_null($item)) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $item->delete();
        return response()->json(['message' => 'Item deleted successfully']);
    }
}
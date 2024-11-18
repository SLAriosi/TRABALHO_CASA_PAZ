<?php
namespace App\Http\Controllers;

use App\Models\inicioCardsInformacionai;
use Illuminate\Http\Request;

class InicioCardInformacionalController extends Controller
{
    public function index()
    {
        $cards = inicioCardsInformacionai::all();
        return response()->json($cards);
    }

    public function create()
    {
        // Este método não é necessário para uma API RESTful
    }

    public function store(Request $request)
    {
        $request->validate([
            'quantidade' => 'required|numeric',
            'subtitulo' => 'required|string|max:255',
            'borderColor' => 'required|string|max:255',
        ]);

        $card = inicioCardsInformacionai::create($request->all());

        return response()->json([
            'message' => 'Card created successfully.',
            'data' => $card
        ], 201);
    }

    public function show(inicioCardsInformacionai $inicioCardInformacional)
    {
        return response()->json($inicioCardInformacional);
    }

    public function edit(inicioCardsInformacionai $inicioCardInformacional)
    {
        // Este método não é necessário para uma API RESTful
    }

    public function update(Request $request, inicioCardsInformacionai $inicioCardInformacional)
    {
        $request->validate([
            'quantidade' => 'required|numeric',
            'subtitulo' => 'required|string|max:255',
        ]);

        $inicioCardInformacional->update($request->all());

        return response()->json([
            'message' => 'Card updated successfully.',
            'data' => $inicioCardInformacional
        ]);
    }

    public function destroy(inicioCardsInformacionai $inicioCardInformacional)
    {
        $inicioCardInformacional->delete();

        return response()->json([
            'message' => 'Card deleted successfully.'
        ]);
    }
}
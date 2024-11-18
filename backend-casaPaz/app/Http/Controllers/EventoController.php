<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EventoController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $eventos = Evento::all();
        return response()->json($eventos);
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            // Add your validation rules here
            'nome' => 'required|string|max:255',
            'descricao' => 'required|string|max:500',
            // ...other rules...
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $evento = Evento::create($request->all());
        return response()->json($evento, 201);
    }

    // Display the specified resource.
    public function show($id)
    {
        $evento = Evento::find($id);
        if (is_null($evento)) {
            return response()->json(['message' => 'Evento not found'], 404);
        }
        return response()->json($evento);
    }

    // Update the specified resource in storage.
    public function update(Request $request, $id)
    {
        $evento = Evento::find($id);
        if (is_null($evento)) {
            return response()->json(['message' => 'Evento not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            // Add your validation rules here
            'nome' => 'sometimes|required|string|max:255',
            'descricao' => 'sometimes|required|string|max:500',
            // ...other rules...
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $evento->update($request->all());
        return response()->json($evento);
    }

    // Remove the specified resource from storage.
    public function destroy($id)
    {
        $evento = Evento::find($id);
        if (is_null($evento)) {
            return response()->json(['message' => 'Evento not found'], 404);
        }
        $evento->delete();
        return response()->json(null, 204);
    }
}
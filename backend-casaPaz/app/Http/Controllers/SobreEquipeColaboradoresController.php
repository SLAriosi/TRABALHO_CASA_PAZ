<?php

namespace App\Http\Controllers;

use App\Models\SobreEquipeColaboradores;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class SobreEquipeColaboradoresController extends Controller
{
    public function index()
    {
        $colaboradores = SobreEquipeColaboradores::all();
        return response()->json($colaboradores);
    }

    public function show($id)
    {
        $colaborador = SobreEquipeColaboradores::find($id);
        if ($colaborador) {
            return response()->json($colaborador);
        } else {
            return response()->json(['message' => 'Colaborador not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $this->validateRequest($request);

        $colaborador = SobreEquipeColaboradores::create($request->all());
        return response()->json($colaborador, 201);
    }

    public function update(Request $request, $id)
    {
        $this->validateRequest($request);

        $colaborador = SobreEquipeColaboradores::find($id);
        if ($colaborador) {
            $colaborador->update($request->all());
            return response()->json($colaborador);
        } else {
            return response()->json(['message' => 'Colaborador not found'], 404);
        }
    }

    public function destroy($id)
    {
        $colaborador = SobreEquipeColaboradores::find($id);
        if ($colaborador) {
            $colaborador->delete();
            return response()->json(['message' => 'Colaborador deleted']);
        } else {
            return response()->json(['message' => 'Colaborador not found'], 404);
        }
    }

    private function validateRequest(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'cargo' => 'required|string|max:255',
            'foto' => 'nullable|string|max:255',
        ]);
    }
}
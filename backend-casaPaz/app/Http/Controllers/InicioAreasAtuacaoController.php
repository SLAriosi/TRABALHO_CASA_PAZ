<?php

namespace App\Http\Controllers;

use App\Models\InicioAreasAtuacao;
use Illuminate\Http\Request;

class InicioAreasAtuacaoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return InicioAreasAtuacao::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'required|string|max:255',
            'imagem' => 'required|url|max:255',
            'descricao' => 'nullable|string',
        ]);

        $inicioAreasAtuacao = InicioAreasAtuacao::create($validated);

        return response()->json($inicioAreasAtuacao, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\InicioAreasAtuacao  $inicioAreasAtuacao
     * @return \Illuminate\Http\Response
     */
    public function show(InicioAreasAtuacao $inicioAreasAtuacao)
    {
        return $inicioAreasAtuacao;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\InicioAreasAtuacao  $inicioAreasAtuacao
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, InicioAreasAtuacao $inicioAreasAtuacao)
    {
        $validated = $request->validate([
            'nome' => 'required|string|max:255',
            'imagem' => 'required|url|max:255',
            'descricao' => 'nullable|string',
        ]);

        $inicioAreasAtuacao->update($validated);

        return response()->json($inicioAreasAtuacao, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\InicioAreasAtuacao  $inicioAreasAtuacao
     * @return \Illuminate\Http\Response
     */
    public function destroy(InicioAreasAtuacao $inicioAreasAtuacao)
    {
        $inicioAreasAtuacao->delete();

        return response()->json(null, 204);
    }
}
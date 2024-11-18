<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InicioAreasAtuacao extends Model
{
    use HasFactory;

    protected $table = 'inicio_areas_atuacao_cards';

    protected $fillable = [
        'nome',
        'imagem',
        'descricao',
    ];
}
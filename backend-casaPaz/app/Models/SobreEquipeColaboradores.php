<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SobreEquipeColaboradores extends Model
{
    use HasFactory;

    protected $table = 'sobre_equipe_colaboradores';

    protected $fillable = [
        'nome',
        'cargo',
        'foto',
    ];
}
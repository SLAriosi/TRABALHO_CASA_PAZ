<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InicioCarrosselImage extends Model
{
    use HasFactory;

    protected $table = 'inicio_carrossel_images';

    protected $fillable = [
        'imagem',
    ];
}

<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InicioQuemSomos extends Model
{
    use HasFactory;

    protected $table = 'inicio_quem_somos';

    protected $fillable = ['imagem'];
}
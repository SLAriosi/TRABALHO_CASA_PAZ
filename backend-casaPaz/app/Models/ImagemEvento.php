<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagemEvento extends Model
{
    use HasFactory;

    protected $table = 'imagens_eventos';

    protected $fillable = [
        'evento_id',
        'url',
    ];

    public function evento()
    {
        return $this->belongsTo(Evento::class);
    }
}
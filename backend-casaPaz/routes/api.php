<?php
use App\Http\Controllers\EventController;
use App\Http\Controllers\InicioCardInformacionalController;
use App\Http\Controllers\InicioFazerDiferencaController;
use App\Http\Controllers\InicioQuemSomosController;
use App\Http\Controllers\InicioAreasAtuacaoController;
use App\Http\Controllers\InicioCarrosselImagesController;
use App\Http\Controllers\SobreEquipeColaboradoresController;
use App\Http\Controllers\EventoController;
use App\Http\Controllers\ImagemEventoController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->post('/events', [EventController::class, 'store'])->name('postEvent');
Route::middleware('auth:sanctum')->get('/events', [EventController::class, 'index'])->name('getEvent');
Route::middleware('auth:sanctum')->put('/events/{id}', [EventController::class, 'update'])->name('updateEvent');
Route::middleware('auth:sanctum')->delete('/events/{id}', [EventController::class, 'destroy'])->name('deleteEvent');

Route::apiResource('inicio-cards-informacionais', InicioCardInformacionalController::class);
Route::apiResource('inicio-fazer-diferenca', InicioFazerDiferencaController::class);
Route::apiResource('inicio-quem-somos', InicioQuemSomosController::class);
Route::apiResource('inicio-areas-atuacao', InicioAreasAtuacaoController::class);
Route::apiResource('inicio-carrossel-images', InicioCarrosselImagesController::class);

Route::middleware('auth:sanctum')->post('/inicio-cards-informacionais', [InicioCardInformacionalController::class, 'store'])->name('postInicioCardInformacional');
Route::middleware('auth:sanctum')->put('/inicio-cards-informacionais/{id}', [InicioCardInformacionalController::class, 'update'])->name('updateInicioCardInformacional');
Route::middleware('auth:sanctum')->delete('/inicio-cards-informacionais/{id}', [InicioCardInformacionalController::class, 'destroy'])->name('deleteInicioCardInformacional');

Route::middleware('auth:sanctum')->post('/inicio-fazer-diferenca', [InicioFazerDiferencaController::class, 'store'])->name('postInicioFazerDiferenca');
Route::middleware('auth:sanctum')->put('/inicio-fazer-diferenca/{id}', [InicioFazerDiferencaController::class, 'update'])->name('updateInicioFazerDiferenca');
Route::middleware('auth:sanctum')->delete('/inicio-fazer-diferenca/{id}', [InicioFazerDiferencaController::class, 'destroy'])->name('deleteInicioFazerDiferenca');

Route::middleware('auth:sanctum')->post('/inicio-quem-somos', [InicioQuemSomosController::class, 'store'])->name('postInicioQuemSomos');
Route::middleware('auth:sanctum')->put('/inicio-quem-somos/{id}', [InicioQuemSomosController::class, 'update'])->name('updateInicioQuemSomos');
Route::middleware('auth:sanctum')->delete('/inicio-quem-somos/{id}', [InicioQuemSomosController::class, 'destroy'])->name('deleteInicioQuemSomos');

Route::middleware('auth:sanctum')->post('/inicio-areas-atuacao', [InicioAreasAtuacaoController::class, 'store'])->name('postInicioAreasAtuacao');
Route::middleware('auth:sanctum')->put('/inicio-areas-atuacao/{id}', [InicioAreasAtuacaoController::class, 'update'])->name('updateInicioAreasAtuacao');
Route::middleware('auth:sanctum')->delete('/inicio-areas-atuacao/{id}', [InicioAreasAtuacaoController::class, 'destroy'])->name('deleteInicioAreasAtuacao');

Route::middleware('auth:sanctum')->post('/inicio-carrossel-images', [InicioCarrosselImagesController::class, 'store'])->name('postInicioCarrosselImages');
Route::middleware('auth:sanctum')->put('/inicio-carrossel-images/{id}', [InicioCarrosselImagesController::class, 'update'])->name('updateInicioCarrosselImages');
Route::middleware('auth:sanctum')->delete('/inicio-carrossel-images/{id}', [InicioCarrosselImagesController::class, 'destroy'])->name('deleteInicioCarrosselImages');

Route::apiResource('eventos', EventoController::class);

Route::post('/imagem-eventos/{id}', [ImagemEventoController::class, 'store'])->name('postImagemEvento');
Route::get('/imagem-eventos', [ImagemEventoController::class, 'index'])->name('getImagemEventos');
Route::get('/imagem-eventos/{id}', [ImagemEventoController::class, 'show'])->where('id', '[0-9]+')->name('getImagemEvento');
Route::middleware('auth:sanctum')->put('/imagem-eventos/{id}', [ImagemEventoController::class, 'update'])->name('updateImagemEvento');
Route::delete('/imagem-eventos/{id}', [ImagemEventoController::class, 'destroy'])->name('deleteImagemEvento');

Route::get('/colaboradores', [SobreEquipeColaboradoresController::class, 'index']);
Route::get('/colaboradores/{id}', [SobreEquipeColaboradoresController::class, 'show']);
Route::post('/colaboradores', [SobreEquipeColaboradoresController::class, 'store']);
Route::put('/colaboradores/{id}', [SobreEquipeColaboradoresController::class, 'update']);
Route::delete('/colaboradores/{id}', [SobreEquipeColaboradoresController::class, 'destroy']);

Route::post('/login', [LoginController::class, 'login']);

Route::get('/users', [UserController::class, 'index'])->name('getUsers');
Route::get('/users/{id}', [UserController::class, 'show'])->name('getUser');
Route::post('/users', [UserController::class, 'store'])->name('createUser');
Route::put('/users/{id}', [UserController::class, 'update'])->name('updateUser');
Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('deleteUser');

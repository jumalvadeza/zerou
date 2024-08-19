extends Node2D

var saudacao: String = " Olá Maria coisa feia!"
var numero: int = 20

func _ready():
	print(saudacao.to_camel_case())
	print(saudacao.to_lower())
	print(saudacao.to_upper())
	print(saudacao.to_snake_case())

class FormaGeometrica {
  #base
  #altura
  #tipo

  constructor(base, altura, tipo) {
    if (typeof base !== "number" || base <= 0) {
      throw new Error("Base deve ser um numero inteiro positivo.");
    }
    if (typeof altura !== "number" || altura <= 0) {
      throw new Error("Altura deve ser um numero inteiro positivo.");
    }
    if (tipo !== "R" && tipo !== "T" && tipo !== "E") {
      throw new Error("Tipo invalido.");
    }
    this.base = base;
    this.altura = altura;
    this.tipo = tipo;
  }

  get getBase() {
    return this.base;
  }
  get getAltura() {
    return this.base;
  }
  get getTipo() {
    return this.base;
  }
  printar() {
    console.log("Base: " + this.base);
    console.log("Altura: " + this.altura);
    console.log("Tipo: " + this.tipo);
  }

  calcularArea() {
    switch (this.tipo) {
      case "R":
        return this.base * this.altura;
      case "T":
        return (this.base * this.altura) / 2;
      case "E":
        return (this.base / 2) * (this.altura / 2) * Math.PI;
    }
  }
}

export default FormaGeometrica;

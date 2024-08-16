type Car = {
    brand: string
    model: string
    year: number

}

interface Computer {
    proccessor:string
    ram: string
    grafics: string
    model: string
    year: number
    on : () => void
    off: () => void
    restart: () => void
}

interface Server {
    id:number
    totalComputers: number
    computers: Computer[]
}


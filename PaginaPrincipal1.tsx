import React from 'react'
import { Search, Book, Headphones, FileText, User, HelpCircle, Mail, ChevronRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'

export default function PaginaPrincipal() {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  const featuredBooks = [
    { id: 1, title: "El Quijote", author: "Miguel de Cervantes", image: "/placeholder.svg?height=300&width=200&text=El+Quijote" },
    { id: 2, title: "Cien años de soledad", author: "Gabriel García Márquez", image: "/placeholder.svg?height=300&width=200&text=Cien+años+de+soledad" },
    { id: 3, title: "1984", author: "George Orwell", image: "/placeholder.svg?height=300&width=200&text=1984" },
    { id: 4, title: "El principito", author: "Antoine de Saint-Exupéry", image: "/placeholder.svg?height=300&width=200&text=El+principito" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/placeholder.svg?height=50&width=50" alt="Logo de la Biblioteca" className="h-12 w-12 mr-4" />
            <h1 className="text-2xl font-bold">Biblioteca Virtual San Francisco de Asís</h1>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-4">
              {['Inicio', 'Catálogo', 'Recursos', 'Mi Cuenta', 'Ayuda', 'Contacto'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-secondary p-4">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Input type="search" placeholder="Buscar libros, autores o temas..." className="flex-grow mr-2" />
            <Button><Search className="mr-2" /> Buscar</Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Featured Carousel */}
        <section aria-label="Libros destacados" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Destacados</h2>
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {featuredBooks.map((book) => (
                <div key={book.id} className="embla__slide flex-[0_0_100%] min-w-0 mr-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center">
                      <img src={book.image} alt={`Portada de ${book.title}`} className="w-48 h-72 object-cover mb-4 rounded" />
                      <h3 className="font-bold text-lg">{book.title}</h3>
                      <p>{book.author}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section aria-label="Novedades" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Novedades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((book) => (
              <Card key={book}>
                <CardContent className="p-4">
                  <img src={`/placeholder.svg?height=200&width=150&text=Libro ${book}`} alt={`Portada del libro ${book}`} className="w-full h-48 object-cover mb-2 rounded" />
                  <h3 className="font-bold">Título del Libro {book}</h3>
                  <p>Autor del Libro {book}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section aria-label="Enlaces rápidos" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categorías Principales</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Ficción', 'No Ficción', 'Ciencia', 'Tecnología'].map((category) => (
              <Button key={category} variant="outline" className="h-auto py-4">
                <Book className="mr-2" /> {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Digital Services */}
        <section aria-label="Servicios digitales" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Servicios Digitales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center">
                <Book className="mr-4" />
                <div>
                  <h3 className="font-bold">Libros Electrónicos</h3>
                  <p>Accede a nuestra colección digital</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center">
                <Headphones className="mr-4" />
                <div>
                  <h3 className="font-bold">Audiolibros</h3>
                  <p>Escucha tus libros favoritos</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center">
                <FileText className="mr-4" />
                <div>
                  <h3 className="font-bold">Revistas</h3>
                  <p>Explora publicaciones actuales</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section aria-label="Testimonios" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((testimonial) => (
              <Card key={testimonial}>
                <CardContent className="p-4">
                  <p className="italic mb-2">"Esta biblioteca virtual ha transformado mi experiencia de aprendizaje. ¡Increíble selección y fácil de usar!"</p>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 mr-1" />
                    <Star className="text-yellow-400 mr-1" />
                    <Star className="text-yellow-400 mr-1" />
                    <Star className="text-yellow-400 mr-1" />
                    <Star className="text-yellow-400 mr-1" />
                  </div>
                  <p className="font-bold mt-2">Usuario {testimonial}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground p-4 mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">Contacto</h3>
            <p>Email: biblioteca@sfacamoapa.edu.ni</p>
            <p>Teléfono: (123) 456-7890</p>
            <div className="flex mt-2">
              {/* Aquí irían los iconos de redes sociales */}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Enlaces Útiles</h3>
            <ul>
              <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
              <li><a href="#" className="hover:underline">Términos de Uso</a></li>
              <li><a href="#" className="hover:underline">Accesibilidad</a></li>
              <li><a href="#" className="hover:underline">Mapa del Sitio</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Apoya nuestra Biblioteca</h3>
            <p>Tus donaciones nos ayudan a crecer y mejorar nuestros servicios.</p>
            <Button className="mt-2">Hacer una Donación</Button>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2023 Biblioteca Virtual San Francisco de Asís Camoapa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
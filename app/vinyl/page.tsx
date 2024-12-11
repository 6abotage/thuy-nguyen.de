import ImageGallery from './ImageGallery'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Artist Portfolio</h1>
        <ImageGallery />
      </div>
    </main>
  )
}


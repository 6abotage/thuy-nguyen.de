'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent} from '@/components/ui/dialog'

import Ausstellungsplakat_Resonanz from './Ausstellungsplakat_Resonanz.png'
import Dreigroschenoper_Cover from './Dreigroschenoper_Cover.png'
import EmotionaleErsteHilfe_GewaltfreieKommunikation from './EmotionaleErsteHilfe_GewaltfreieKommunikation.png'
import FFF_DavidCarson from './FFF_DavidCarson.png'
import PolitischesPlakat from './PolitischesPlakat.png'
import PolitischesPlakat_Victimblaming from './PolitischesPlakat_Victimblaming.png'


const images = [
  { src: Ausstellungsplakat_Resonanz, alt: 'Ausstellungsplakat Resonanz' },
  { src: Dreigroschenoper_Cover, alt: 'Dreigroschenoper Cover' },
  { src: EmotionaleErsteHilfe_GewaltfreieKommunikation, alt: 'Emotionale Erste Hilfe' },
  { src: FFF_DavidCarson, alt: 'FFF David Carson' },
  { src: PolitischesPlakat, alt: 'Politisches Plakat' },
  { src: PolitischesPlakat_Victimblaming, alt: 'Politisches Plakat Victimblaming' },
]

export default function ImageGallery() {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null)

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image)
    setOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.alt} className="relative aspect-square cursor-pointer" onClick={() => handleImageClick(image.src)}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative w-full aspect-square">
              <Image
                src={selectedImage}
                alt="Selected artwork"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}


import React from 'react';
import { Heart, Sparkles, Infinity, Sun, Moon, Stars } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-float flex justify-center mb-6">
            <Heart className="w-16 h-16 text-rose-500 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-rose-900 mb-6">
            Love is Everything
          </h1>
          <p className="text-xl md:text-2xl text-rose-700 mb-8">
            In the symphony of life, love is the most beautiful melody
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all">
            <Sparkles className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-2xl font-bold text-rose-900 mb-4">Magic Moments</h3>
            <p className="text-rose-700">Every moment spent with someone you love becomes a treasure worth keeping forever.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all">
            <Infinity className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-2xl font-bold text-rose-900 mb-4">Eternal Bond</h3>
            <p className="text-rose-700">True love knows no boundaries and stands the test of time.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all">
            <Stars className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-2xl font-bold text-rose-900 mb-4">Written in Stars</h3>
            <p className="text-rose-700">Some connections are destined, written in the stars long before we meet.</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-20 px-4 bg-white/40">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl font-serif text-rose-900 italic">
            "Love is not about how many days, months, or years you have been together. 
            Love is about how much you love each other every single day."
          </blockquote>
        </div>
      </div>

      {/* Day/Night Love */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="flex gap-4 justify-center md:justify-start mb-6">
              <Sun className="w-8 h-8 text-amber-500" />
              <Moon className="w-8 h-8 text-indigo-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-6">
              Love Through Day & Night
            </h2>
            <p className="text-lg text-rose-700">
              Like the sun and moon, love illuminates our darkest moments and brings warmth to our days.
              It's a constant presence that guides us through life's journey.
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80"
              alt="Sunset silhouette"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
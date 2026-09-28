'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, ChevronDown, MessageCircle, Minus, ShoppingBag, Sparkles, X } from 'lucide-react'

const products = [
  { name: 'Scream Refuel', type: 'Limited edition energy drink', price: '$18.00', note: '6 × 12 oz cans', color: 'violet', badge: 'Fan favorite' },
  { name: 'Scream Canisters', type: 'Collectible sound capsules', price: '$24.00', note: 'Set of 3', color: 'lime', badge: 'New drop' },
  { name: 'Monstropolis Tee', type: 'Heavyweight cotton', price: '$32.00', note: 'Sizes XS–3XL', color: 'blue', badge: 'Best seller' },
  { name: 'Door Station Keychain', type: 'Light-up sound accessory', price: '$16.00', note: 'Working door button', color: 'blue', badge: 'Tiny terror' },
  { name: 'Laugh Fuel Canister', type: 'Glow-in-the-dark collectible', price: '$26.00', note: 'Limited laugh energy', color: 'lime', badge: 'New energy' },
  { name: 'Scare Floor Cap', type: 'Embroidered night-shift cap', price: '$28.00', note: 'Blue or black edition', color: 'violet', badge: 'Night shift' },
  { name: 'Boo’s Door Replica', type: 'Desktop display model', price: '$42.00', note: '6-inch opening door', color: 'blue', badge: 'Shelf icon' },
  { name: 'CDA Decontamination Kit', type: 'Novelty safety pack', price: '$22.00', note: '3-piece warning kit', color: 'lime', badge: 'Handle with care' },
]

export default function Page() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: 'Hey, fright-seeker. I can help you find the right scare gear.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendMessage(event: FormEvent) {
    event.preventDefault()
    if (!input.trim() || loading) return
    const text = input.trim()
    setInput('')
    setMessages((current) => [...current, { role: 'user', text }])
    setLoading(true)
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: [...messages, { role: 'user', text }].map((message) => ({ role: message.role, content: message.text })) }) })
      const answer = await response.text()
      setMessages((current) => [...current, { role: 'assistant', text: answer || 'I lost my scare meter for a second. Try again?' }])
    } catch {
      setMessages((current) => [...current, { role: 'assistant', text: 'The scream tunnel is busy. Try again in a moment.' }])
    } finally { setLoading(false) }
  }

  return (
    <main className="site-shell">
      <div className="topline"><span>Free shipping on fright orders over $50</span><span>Worldwide delivery <ChevronDown size={13} /></span></div>
      <header className="nav"><a className="wordmark" href="#top">SCREAM<span>•</span>SUPPLY</a><nav><a href="#shop">Shop all</a><a href="#shop">Refuel</a><a href="#shop">Collectibles</a><a href="#story">Our story</a></nav><div className="nav-actions"><button aria-label="Open chat" onClick={() => setChatOpen(true)}><MessageCircle size={19} /></button><button aria-label="Ask about availability" className="bag" onClick={() => setChatOpen(true)}><ShoppingBag size={19} /></button></div></header>

      <section id="top" className="hero">
        <div className="hero-copy"><p className="eyebrow"><Sparkles size={15} /> Officially unofficial monster supplies</p><h1>POWER YOUR<br /><em>SCREAM.</em></h1><p className="hero-description">Fuel the fright. Gear up for the night. A limited run of essentials for every monster, mischief-maker, and midnight snacker.</p><div className="hero-actions"><a className="button primary" href="#shop">Shop the drop <ArrowRight size={17} /></a><a className="text-link" href="#story">Why scream supply? <ArrowRight size={15} /></a></div></div>
        <div className="hero-art" aria-label="Abstract illustration of an energy can surrounded by monster-inspired shapes"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="eye eye-left"><span /></div><div className="eye eye-right"><span /></div><div className="can"><div className="can-top" /><strong>SCREAM</strong><small>REFUEL</small><i>LIMITED<br />NIGHT RUN</i><div className="can-wave" /></div><span className="spark spark-one">✦</span><span className="spark spark-two">✦</span></div>
      </section>

      <section className="ticker"><span>Fearlessly fresh</span><span>•</span><span>Made for monsters</span><span>•</span><span>Nothing ordinary</span><span>•</span><span>Fearlessly fresh</span></section>

      <section id="shop" className="shop-section"><div className="section-heading"><div><p className="eyebrow">The night shift essentials</p><h2>Pick your <em>power-up.</em></h2></div><a className="text-link" href="#shop">View all products <ArrowRight size={15} /></a></div><div className="product-grid">{products.map((product) => <article className={`product-card ${product.color}`} key={product.name}><div className="product-image"><span className="product-badge">{product.badge}</span><div className={`product-visual product-visual-${products.indexOf(product)}`}><div className="product-glow" /><div className="product-icon" role="img" aria-label={`${product.name} product image`} /></div><button className="add-button" onClick={() => setChatOpen(true)}><ArrowRight size={17} /> Check availability</button></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.type}</p></div><strong>{product.price}</strong></div><p className="product-note">{product.note}</p></article>)}</div></section>

      <section id="story" className="manifesto"><p className="eyebrow">A message from the scream team</p><h2>For the ones who<br /><em>light up the dark.</em></h2><p>We make small-batch goods for big-night energy. No boring basics. No beige vibes. Just weirdly wonderful things that keep the city buzzing after lights out.</p><a className="button secondary" href="#shop">Meet the collection <ArrowRight size={17} /></a></section>

      <footer><a className="wordmark" href="#top">SCREAM<span>•</span>SUPPLY</a><p>© 2026 Scream Supply Co. Keep the night loud.</p><div><a href="#shop">Instagram</a><a href="#shop">Contact</a></div></footer>

      {chatOpen && <aside className="chat-panel" aria-label="Scream Supply assistant"><div className="chat-header"><div><span className="status-dot" /> Screamy, your guide</div><button aria-label="Close chat" onClick={() => setChatOpen(false)}><X size={18} /></button></div><div className="chat-messages">{messages.map((message, index) => <div className={`message ${message.role}`} key={`${message.role}-${index}`}>{message.text}</div>)}{loading && <div className="message assistant typing">Thinking up a frightfully good answer...</div>}</div><form className="chat-form" onSubmit={sendMessage}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about the collection..." aria-label="Chat message" /><button aria-label="Send message"><ArrowRight size={18} /></button></form></aside>}
    </main>
  )
}

'use client'

import { useState } from 'react'
import { Plane, Search, MapPin, Clock, ArrowRight, AlertCircle, TrendingUp, Shield, Zap, Star, Globe, ChevronRight, Radio, Activity } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Skeleton } from '@/components/ui/skeleton'

export default function Home() {
  const [flightNumber, setFlightNumber] = useState('')
  const [tracking, setTracking] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleSearch = () => {
    if (!flightNumber.trim()) return
    setTracking(true)
    // Simulate search results
    setTimeout(() => {
      setSearchResults([
        {
          flightNumber: 'BA123',
          airline: 'British Airways',
          departure: 'LHR',
          arrival: 'JFK',
          departureTime: '14:30',
          arrivalTime: '18:45',
          status: 'On Time',
          terminal: '5',
          gate: 'A12',
          aircraft: 'Boeing 777-300ER'
        },
        {
          flightNumber: 'EY12',
          airline: 'Emirates',
          departure: 'DXB',
          arrival: 'LHR',
          departureTime: '08:15',
          arrivalTime: '12:30',
          status: 'Delayed',
          terminal: '3',
          gate: 'C45',
          aircraft: 'Airbus A380'
        },
        {
          flightNumber: 'U2800',
          airline: 'easyJet',
          departure: 'LGW',
          arrival: 'BCN',
          departureTime: '16:45',
          arrivalTime: '19:30',
          status: 'Boarding',
          terminal: 'N',
          gate: 'B23',
          aircraft: 'Airbus A320'
        }
      ])
      setTracking(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">FlightTracker<span className="text-sky-600">.info</span></span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#tracker" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">Flight Tracker</a>
              <a href="#airlines" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">Airlines</a>
              <a href="#airports" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">Airports</a>
              <a href="#faq" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">FAQ</a>
            </div>
            <Button className="bg-sky-600 hover:bg-sky-700">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-200">
              <Radio className="w-4 h-4 mr-1" />
              Live Flight Tracker
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Track Any Flight in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700"> Real-Time</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your ultimate free flight tracker for easyJet, Ryanair, Jet2, Emirates, British Airways, and 1000+ airlines worldwide. Monitor live flights, check terminal information, and get real-time updates.
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Enter flight number (e.g., BA123, EZY1234)"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 focus:border-sky-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={tracking}
                  className="h-14 px-8 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-lg font-semibold"
                >
                  {tracking ? (
                    <>
                      <Activity className="mr-2 h-5 w-5 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Track Flight
                    </>
                  )}
                </Button>
              </div>

              {searchResults.length > 0 && (
                <div className="mt-6 space-y-4">
                  {searchResults.map((flight, index) => (
                    <Card key={index} className="border-2 border-sky-100 hover:border-sky-300 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-sky-100 p-3 rounded-lg">
                              <Plane className="h-8 w-8 text-sky-600" />
                            </div>
                            <div>
                              <div className="font-bold text-xl text-gray-900">{flight.flightNumber}</div>
                              <div className="text-gray-600">{flight.airline}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-8">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{flight.departure}</div>
                              <div className="text-gray-500 text-sm">{flight.departureTime}</div>
                              <div className="text-xs text-gray-400 mt-1">Terminal {flight.terminal}</div>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className="h-0.5 w-16 bg-gray-300 relative">
                                <ArrowRight className="absolute -top-2 right-0 h-4 w-4 text-sky-600" />
                              </div>
                            </div>

                            <div className="text-center">
                              <div className="text-2xl font-bold text-gray-900">{flight.arrival}</div>
                              <div className="text-gray-500 text-sm">{flight.arrivalTime}</div>
                              <div className="text-xs text-gray-400 mt-1">Gate {flight.gate}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Badge className={`${flight.status === 'On Time' ? 'bg-green-100 text-green-700' : flight.status === 'Delayed' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                              {flight.status}
                            </Badge>
                            <div className="text-xs text-gray-500">{flight.aircraft}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="cursor-pointer hover:bg-sky-50">Flight Tracker 24</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-sky-50">Live Flight Tracker</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-sky-50">Flights Radar</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-sky-50">Free Flight Tracker</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="tracker" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Use FlightTracker.info?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most comprehensive flight tracking platform with real-time data from 1000+ airlines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-sky-300 transition-colors group">
              <CardHeader>
                <div className="bg-sky-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors">
                  <Radio className="h-7 w-7 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Real-Time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Live flight tracker with instant updates on flight status, delays, and arrivals
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-sky-300 transition-colors group">
              <CardHeader>
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Globe className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Global Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track flights worldwide including EasyJet, Ryanair, Jet2, Emirates, and more
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-sky-300 transition-colors group">
              <CardHeader>
                <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <TrendingUp className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Flight Radar Map</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visual flight tracker with interactive map showing live aircraft positions
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-sky-300 transition-colors group">
              <CardHeader>
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                  <Zap className="h-7 w-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Free & Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Completely free flight tracker with lightning-fast search and results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Airlines Section */}
      <section id="airlines" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Airlines We Track</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive flight tracking for all major airlines and low-cost carriers
            </p>
          </div>

          <Tabs defaultValue="uk" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="uk">UK Airlines</TabsTrigger>
              <TabsTrigger value="european">European</TabsTrigger>
              <TabsTrigger value="middle-east">Middle East</TabsTrigger>
              <TabsTrigger value="asian">Asian</TabsTrigger>
            </TabsList>

            <TabsContent value="uk" className="space-y-4">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-4 rounded-lg">
                        <Plane className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">British Airways</h3>
                        <p className="text-gray-600">Full-service carrier with BA Executive Club</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-600">Popular</Badge>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Main Hub</div>
                      <div className="font-semibold">London Heathrow</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Terminals</div>
                      <div className="font-semibold">Terminal 3, 5</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Destinations</div>
                      <div className="font-semibold">200+</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Flight Tracker</div>
                      <div className="font-semibold text-sky-600">BA Flights</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-100 p-4 rounded-lg">
                        <Plane className="h-8 w-8 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">easyJet</h3>
                        <p className="text-gray-600">Europe's leading low-cost airline</p>
                      </div>
                    </div>
                    <Badge className="bg-orange-600">LCC</Badge>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Main Hub</div>
                      <div className="font-semibold">London Luton</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Terminals</div>
                      <div className="font-semibold">Multiple</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Destinations</div>
                      <div className="font-semibold">150+</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Flight Tracker</div>
                      <div className="font-semibold text-sky-600">easyJet Flights</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-yellow-100 p-4 rounded-lg">
                        <Plane className="h-8 w-8 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Ryanair</h3>
                        <p className="text-gray-600">Europe's largest low-cost carrier</p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-600">Budget</Badge>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Main Hub</div>
                      <div className="font-semibold">Dublin</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Terminals</div>
                      <div className="font-semibold">Multiple</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Destinations</div>
                      <div className="font-semibold">200+</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Flight Tracker</div>
                      <div className="font-semibold text-sky-600">Ryanair Flights</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-red-100 p-4 rounded-lg">
                        <Plane className="h-8 w-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Jet2</h3>
                        <p className="text-gray-600">UK's leading leisure airline</p>
                      </div>
                    </div>
                    <Badge className="bg-red-600">Leisure</Badge>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Main Hub</div>
                      <div className="font-semibold">Leeds Bradford</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Terminals</div>
                      <div className="font-semibold">Multiple</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Destinations</div>
                      <div className="font-semibold">70+</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Flight Tracker</div>
                      <div className="font-semibold text-sky-600">Jet2 Flights</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="european">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-4 rounded-lg">
                      <Plane className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Swiss International Air Lines</h3>
                      <p className="text-gray-600">Switzerland's flag carrier, part of Lufthansa Group</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Main Hub</div>
                      <div className="font-semibold">Zurich Airport</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Terminals</div>
                      <div className="font-semibold">Terminal 1, 2</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Destinations</div>
                      <div className="font-semibold">100+</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Flight Tracker</div>
                      <div className="font-semibold text-sky-600">Swiss Air Flights</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="middle-east">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-4 rounded-lg">
                      <Plane className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Emirates</h3>
                      <p className="text-gray-600">World's largest international airline</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Main Hub</div>
                      <div className="font-semibold">Dubai International</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Terminals</div>
                      <div className="font-semibold">Terminal 3</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Destinations</div>
                      <div className="font-semibold">150+</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Flight Tracker</div>
                      <div className="font-semibold text-sky-600">Emirates Flights</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="asian">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-100 p-4 rounded-lg">
                      <Plane className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Japan Airlines (JAL)</h3>
                      <p className="text-gray-600">Japan's flag carrier, Oneworld alliance member</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Main Hub</div>
                      <div className="font-semibold">Tokyo Haneda & Narita</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Terminals</div>
                      <div className="font-semibold">Multiple</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Destinations</div>
                      <div className="font-semibold">90+</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Flight Tracker</div>
                      <div className="font-semibold text-sky-600">JAL Flights</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Airport Terminals Section */}
      <section id="airports" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Airport Terminal Information</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive airport terminal details for major airports worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-sky-300 transition-colors">
              <CardHeader>
                <MapPin className="h-8 w-8 text-sky-600 mb-2" />
                <CardTitle>Terminal 5 - Heathrow</CardTitle>
                <CardDescription>British Airways main hub</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    British Airways long-haul flights
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    BA Executive Club check-in
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Premium lounges available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-sky-300 transition-colors">
              <CardHeader>
                <MapPin className="h-8 w-8 text-sky-600 mb-2" />
                <CardTitle>Terminal 4 - Heathrow</CardTitle>
                <CardDescription>International & SkyTeam airlines</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    SkyTeam alliance carriers
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Middle Eastern airlines
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Duty-free shopping
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-sky-300 transition-colors">
              <CardHeader>
                <MapPin className="h-8 w-8 text-sky-600 mb-2" />
                <CardTitle>Terminal 1 - Heathrow</CardTitle>
                <CardDescription>Domestic & European flights</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Domestic connections
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    European destinations
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Fast security lanes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-sky-300 transition-colors">
              <CardHeader>
                <MapPin className="h-8 w-8 text-sky-600 mb-2" />
                <CardTitle>Terminal 2 - Heathrow</CardTitle>
                <CardDescription>Star Alliance hub</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Star Alliance carriers
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Modern facilities
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Premium check-in
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-sky-300 transition-colors">
              <CardHeader>
                <MapPin className="h-8 w-8 text-sky-600 mb-2" />
                <CardTitle>London Gatwick</CardTitle>
                <CardDescription>North & South Terminals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    easyJet operations
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Inter-terminal monorail
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    24/7 operations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-sky-300 transition-colors">
              <CardHeader>
                <MapPin className="h-8 w-8 text-sky-600 mb-2" />
                <CardTitle>Manchester Airport</CardTitle>
                <CardDescription>Terminals 1, 2 & 3</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Jet2.com base
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Multiple terminals
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Extensive shopping
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flight Tracking Tools */}
      <section className="py-20 px-4 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flight Tracking Tools</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools to help you track, monitor, and manage your flights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <Radio className="h-10 w-10 text-sky-600 mb-4" />
                <CardTitle>Flight Tracker 24</CardTitle>
                <CardDescription>Monitor flights around the clock</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  24/7 flight tracking service with real-time updates, delay notifications, and flight status monitoring for any flight worldwide.
                </p>
                <Button className="w-full bg-sky-600 hover:bg-sky-700">
                  Start Tracking
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <MapPin className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Live Flight Map</CardTitle>
                <CardDescription>Visual flight radar display</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Interactive map showing real-time aircraft positions, flight paths, and airport traffic with detailed information on each flight.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View Map
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <AlertCircle className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>Delay Alerts</CardTitle>
                <CardDescription>Get notified of changes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Receive instant notifications for flight delays, cancellations, gate changes, and status updates via email or push notifications.
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Set Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about flight tracking
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">How do I track a flight?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Simply enter the flight number (e.g., BA123, EZY1234) in the search box above and click "Track Flight". You can also search by route or airport code. Our live flight tracker will display real-time information including departure and arrival times, terminal, gate, and flight status.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Is FlightTracker.info free to use?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes! FlightTracker.info is a completely free flight tracker. You can track unlimited flights, access live flight maps, and receive delay alerts at no cost. No registration is required for basic tracking features.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Which airlines can I track?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We track over 1000 airlines worldwide including British Airways, easyJet, Ryanair, Jet2, Emirates, Swiss International Air Lines, Japan Airlines, and many more. Our comprehensive coverage includes major carriers, low-cost airlines, and charter flights.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">How accurate is the flight data?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our flight tracker provides real-time data with high accuracy. Information is sourced directly from aviation databases and updated continuously. Flight status, times, and positions are typically accurate to within minutes, though slight delays may occur due to data transmission.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Can I track flights on a map?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes! Our live flight tracker map shows real-time aircraft positions, flight paths, and airport traffic. You can zoom in on specific airports, track multiple flights simultaneously, and view detailed information about each aircraft including altitude, speed, and aircraft type.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">How do I find terminal information?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Terminal information is displayed in the flight search results. We provide details for major airports including Terminal 1, Terminal 2, Terminal 4, and Terminal 5 at Heathrow, as well as terminals at Gatwick, Manchester, and other major airports worldwide.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-sky-100">Airlines Tracked</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500K+</div>
              <div className="text-sky-100">Daily Flights</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50M+</div>
              <div className="text-sky-100">Monthly Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-sky-100">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Tracking Your Flight Today</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of travelers who trust FlightTracker.info for real-time flight information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-lg px-8">
              <Search className="mr-2 h-5 w-5" />
              Track a Flight
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <MapPin className="mr-2 h-5 w-5" />
              Explore Airports
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-sky-600 p-2 rounded-lg">
                  <Plane className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">FlightTracker.info</span>
              </div>
              <p className="text-sm text-gray-400">
                Your ultimate free flight tracker for real-time flight information, airport terminal details, and airline tracking worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Flight Tracker</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Live Flight Tracker</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Flight Tracker 24</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Flights Radar</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Free Flight Tracker</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Popular Airlines</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">easyJet Flights</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Ryanair Flights</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Jet2 Flights</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Emirates Flights</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Airport Info</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-sky-400 transition-colors">Terminal 5</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Terminal 4</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Terminal 1</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Terminal 2</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 FlightTracker.info - All rights reserved. Your trusted free flight tracker.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

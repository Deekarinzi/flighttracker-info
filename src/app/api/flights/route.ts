import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// Mock flight data - In production, this would come from a real flight data API
const mockFlights = [
  {
    id: 'BA123',
    flightNumber: 'BA123',
    airline: 'British Airways',
    airlineCode: 'BA',
    departure: {
      airport: 'LHR',
      airportName: 'London Heathrow',
      city: 'London',
      country: 'United Kingdom',
      terminal: '5',
      gate: 'A12',
      time: '14:30',
      date: new Date().toISOString(),
      scheduledTime: '14:30',
      estimatedTime: '14:30',
      actualTime: '14:32'
    },
    arrival: {
      airport: 'JFK',
      airportName: 'John F. Kennedy International',
      city: 'New York',
      country: 'United States',
      terminal: '7',
      gate: 'B45',
      time: '18:45',
      date: new Date().toISOString(),
      scheduledTime: '18:45',
      estimatedTime: '18:48'
    },
    status: 'On Time',
    aircraft: {
      type: 'Boeing 777-300ER',
      registration: 'G-STBE'
    },
    progress: 35,
    altitude: 35000,
    speed: 560,
    distance: 3458,
    duration: '8h 15m'
  },
  {
    id: 'EY12',
    flightNumber: 'EY12',
    airline: 'Emirates',
    airlineCode: 'EY',
    departure: {
      airport: 'DXB',
      airportName: 'Dubai International',
      city: 'Dubai',
      country: 'United Arab Emirates',
      terminal: '3',
      gate: 'C45',
      time: '08:15',
      date: new Date().toISOString(),
      scheduledTime: '08:15',
      estimatedTime: '08:45'
    },
    arrival: {
      airport: 'LHR',
      airportName: 'London Heathrow',
      city: 'London',
      country: 'United Kingdom',
      terminal: '3',
      gate: 'A23',
      time: '12:30',
      date: new Date().toISOString(),
      scheduledTime: '12:30',
      estimatedTime: '13:00'
    },
    status: 'Delayed',
    aircraft: {
      type: 'Airbus A380',
      registration: 'A6-EEY'
    },
    progress: 25,
    altitude: 38000,
    speed: 540,
    distance: 3474,
    duration: '7h 30m'
  },
  {
    id: 'U2800',
    flightNumber: 'U2800',
    airline: 'easyJet',
    airlineCode: 'U2',
    departure: {
      airport: 'LGW',
      airportName: 'London Gatwick',
      city: 'London',
      country: 'United Kingdom',
      terminal: 'N',
      gate: 'B23',
      time: '16:45',
      date: new Date().toISOString(),
      scheduledTime: '16:45',
      estimatedTime: '16:45',
      actualTime: '16:48'
    },
    arrival: {
      airport: 'BCN',
      airportName: 'Barcelona-El Prat',
      city: 'Barcelona',
      country: 'Spain',
      terminal: '1',
      gate: 'A12',
      time: '19:30',
      date: new Date().toISOString(),
      scheduledTime: '19:30',
      estimatedTime: '19:30'
    },
    status: 'Boarding',
    aircraft: {
      type: 'Airbus A320neo',
      registration: 'G-EZTA'
    },
    progress: 5,
    altitude: 0,
    speed: 0,
    distance: 1139,
    duration: '2h 15m'
  },
  {
    id: 'FR1234',
    flightNumber: 'FR1234',
    airline: 'Ryanair',
    airlineCode: 'FR',
    departure: {
      airport: 'STN',
      airportName: 'London Stansted',
      city: 'London',
      country: 'United Kingdom',
      terminal: '1',
      gate: 'C12',
      time: '10:30',
      date: new Date().toISOString(),
      scheduledTime: '10:30',
      estimatedTime: '10:45',
      actualTime: '10:47'
    },
    arrival: {
      airport: 'DUB',
      airportName: 'Dublin Airport',
      city: 'Dublin',
      country: 'Ireland',
      terminal: '1',
      gate: 'D34',
      time: '11:45',
      date: new Date().toISOString(),
      scheduledTime: '11:45',
      estimatedTime: '12:00'
    },
    status: 'In Flight',
    aircraft: {
      type: 'Boeing 737-800',
      registration: 'EIRBB'
    },
    progress: 65,
    altitude: 36000,
    speed: 520,
    distance: 449,
    duration: '1h 15m'
  },
  {
    id: 'LS123',
    flightNumber: 'LS123',
    airline: 'Jet2',
    airlineCode: 'LS',
    departure: {
      airport: 'MAN',
      airportName: 'Manchester Airport',
      city: 'Manchester',
      country: 'United Kingdom',
      terminal: '1',
      gate: 'A15',
      time: '07:00',
      date: new Date().toISOString(),
      scheduledTime: '07:00',
      estimatedTime: '07:00',
      actualTime: '07:02'
    },
    arrival: {
      airport: 'PMI',
      airportName: 'Palma de Mallorca Airport',
      city: 'Palma',
      country: 'Spain',
      terminal: 'A',
      gate: 'B8',
      time: '10:45',
      date: new Date().toISOString(),
      scheduledTime: '10:45',
      estimatedTime: '10:45'
    },
    status: 'Landed',
    aircraft: {
      type: 'Boeing 737-800',
      registration: 'G-JZHC'
    },
    progress: 100,
    altitude: 0,
    speed: 0,
    distance: 1676,
    duration: '2h 45m'
  },
  {
    id: 'LX123',
    flightNumber: 'LX123',
    airline: 'Swiss International Air Lines',
    airlineCode: 'LX',
    departure: {
      airport: 'ZRH',
      airportName: 'Zurich Airport',
      city: 'Zurich',
      country: 'Switzerland',
      terminal: '1',
      gate: 'A12',
      time: '09:00',
      date: new Date().toISOString(),
      scheduledTime: '09:00',
      estimatedTime: '09:00',
      actualTime: '09:03'
    },
    arrival: {
      airport: 'LHR',
      airportName: 'London Heathrow',
      city: 'London',
      country: 'United Kingdom',
      terminal: '2',
      gate: 'B56',
      time: '10:00',
      date: new Date().toISOString(),
      scheduledTime: '10:00',
      estimatedTime: '10:08'
    },
    status: 'Landed',
    aircraft: {
      type: 'Airbus A220-300',
      registration: 'HB-JBC'
    },
    progress: 100,
    altitude: 0,
    speed: 0,
    distance: 777,
    duration: '1h 55m'
  },
  {
    id: 'JL123',
    flightNumber: 'JL123',
    airline: 'Japan Airlines',
    airlineCode: 'JL',
    departure: {
      airport: 'HND',
      airportName: 'Tokyo Haneda',
      city: 'Tokyo',
      country: 'Japan',
      terminal: '3',
      gate: '112',
      time: '22:30',
      date: new Date().toISOString(),
      scheduledTime: '22:30',
      estimatedTime: '22:45',
      actualTime: '22:48'
    },
    arrival: {
      airport: 'LHR',
      airportName: 'London Heathrow',
      city: 'London',
      country: 'United Kingdom',
      terminal: '3',
      gate: 'A35',
      time: '03:45',
      date: new Date(Date.now() + 86400000).toISOString(),
      scheduledTime: '03:45',
      estimatedTime: '04:05'
    },
    status: 'In Flight',
    aircraft: {
      type: 'Boeing 787-9 Dreamliner',
      registration: 'JA838J'
    },
    progress: 45,
    altitude: 40000,
    speed: 580,
    distance: 9571,
    duration: '12h 00m'
  }
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const flightNumber = searchParams.get('flightNumber');
  const airline = searchParams.get('airline');
  const departure = searchParams.get('departure');
  const arrival = searchParams.get('arrival');

  try {
    let flights = [...mockFlights];

    // Filter by flight number
    if (flightNumber) {
      const searchTerm = flightNumber.toUpperCase().replace(/\s+/g, '');
      flights = flights.filter(f =>
        f.flightNumber.replace(/\s+/g, '') === searchTerm ||
        f.id.toUpperCase() === searchTerm
      );
    }

    // Filter by airline
    if (airline) {
      const searchTerm = airline.toUpperCase();
      flights = flights.filter(f =>
        f.airlineCode === searchTerm ||
        f.airline.toUpperCase().includes(searchTerm)
      );
    }

    // Filter by departure airport
    if (departure) {
      const searchTerm = departure.toUpperCase();
      flights = flights.filter(f =>
        f.departure.airport === searchTerm ||
        f.departure.city.toUpperCase().includes(searchTerm) ||
        f.departure.airportName.toUpperCase().includes(searchTerm)
      );
    }

    // Filter by arrival airport
    if (arrival) {
      const searchTerm = arrival.toUpperCase();
      flights = flights.filter(f =>
        f.arrival.airport === searchTerm ||
        f.arrival.city.toUpperCase().includes(searchTerm) ||
        f.arrival.airportName.toUpperCase().includes(searchTerm)
      );
    }

    return NextResponse.json({
      success: true,
      data: flights,
      count: flights.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching flight data:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch flight data',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

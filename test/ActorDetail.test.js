
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ActorDetail from './ActorDetail';

const mockActor = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  films: [],
  vehicles: [],
  starships: []
};

describe('ActorDetail Component', () => {
  test('renders actor details', () => {
    render(<ActorDetail actor={mockActor} />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Height: 172')).toBeInTheDocument();
    expect(screen.getByText('Mass: 77')).toBeInTheDocument();
    expect(screen.getByText('Hair Color: blond')).toBeInTheDocument();
    expect(screen.getByText('Skin Color: fair')).toBeInTheDocument();
    expect(screen.getByText('Eye Color: blue')).toBeInTheDocument();
    expect(screen.getByText('Birth Year: 19BBY')).toBeInTheDocument();
    expect(screen.getByText('Gender: male')).toBeInTheDocument();
  });

  test('renders films, vehicles, and starships', () => {
    const actorWithDetails = {
      ...mockActor,
      films: ['https://swapi.py4e.com/api/films/1/'],
      vehicles: ['https://swapi.py4e.com/api/vehicles/14/'],
      starships: ['https://swapi.py4e.com/api/starships/12/']
    };
    render(<ActorDetail actor={actorWithDetails} />);
    expect(screen.getByText('Films:')).toBeInTheDocument();
    expect(screen.getByText('Vehicles:')).toBeInTheDocument();
    expect(screen.getByText('Starships:')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'https://swapi.py4e.com/api/films/1/' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'https://swapi.py4e.com/api/vehicles/14/' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'https://swapi.py4e.com/api/starships/12/' })).toBeInTheDocument();
  });

  test('calls onBack function when back button is clicked', () => {
    const onBack = jest.fn();
    render(<ActorDetail actor={mockActor} onBack={onBack} />);
    const backButton = screen.getByText('Back to list');
    fireEvent.click(backButton);
    expect(onBack).toHaveBeenCalledTimes(1);
  });
});

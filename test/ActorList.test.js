
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import ActorList from './ActorList';

jest.mock('axios');

describe('ActorList Component', () => {
  test('renders loading state', () => {
    axios.get.mockResolvedValueOnce({ data: { results: [] } });
    render(<ActorList />);
    const loadingElement = screen.getByText(/loading/i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders error state', async () => {
    const error = 'Error fetching data';
    axios.get.mockRejectedValueOnce(new Error(error));
    render(<ActorList />);
    const errorElement = await screen.findByText(/error/i);
    expect(errorElement).toBeInTheDocument();
  });

  test('renders actor list', async () => {
    const actors = [
      { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', films: [], vehicles: [], starships: [] },
      { name: 'Leia Organa', height: '150', mass: '49', hair_color: 'brown', skin_color: 'light', eye_color: 'brown', birth_year: '19BBY', gender: 'female', films: [], vehicles: [], starships: [] }
    ];
    axios.get.mockResolvedValueOnce({ data: { results: actors } });
    render(<ActorList />);
    const actorNames = await screen.findAllByRole('heading', { level: 3 });
    expect(actorNames).toHaveLength(2);
    expect(actorNames[0]).toHaveTextContent('Luke Skywalker');
    expect(actorNames[1]).toHaveTextContent('Leia Organa');
  });

  test('clicking on actor card opens actor details', async () => {
    const actors = [
      { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', films: [], vehicles: [], starships: [] }
    ];
    axios.get.mockResolvedValueOnce({ data: { results: actors } });
    render(<ActorList />);
    const actorCard = await screen.findByText('Luke Skywalker');
    fireEvent.click(actorCard);
    const actorDetailTitle = await screen.findByText('Luke Skywalker');
    expect(actorDetailTitle).toBeInTheDocument();
  });

  test('clicking back button closes actor details', async () => {
    const actors = [
      { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male', films: [], vehicles: [], starships: [] }
    ];
    axios.get.mockResolvedValueOnce({ data: { results: actors } });
    render(<ActorList />);
    const actorCard = await screen.findByText('Luke Skywalker');
    fireEvent.click(actorCard);
    const backButton = await screen.findByText('Back to list');
    fireEvent.click(backButton);
    const actorCardAfterBack = await screen.findByText('Luke Skywalker');
    expect(actorCardAfterBack).toBeInTheDocument();
  });
});

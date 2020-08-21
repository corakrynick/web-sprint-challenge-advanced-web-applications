import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import * as mockAxios from './axiosWithAuth'
jest.mock('./axiosWithAuth')
jest.mock('axios')
const axios = require('axios')
jest.mock('axios', () => ({
  create: jest.fn(),
  get: jest.fn()
}))

const colorList = {data: [
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff'
    },
    id: 1
  },
  {
    color: 'limegreen',
    code: {
      hex: '#99ddbc'
    },
    id: 2
  },
  {
    color: 'aqua',
    code: {
      hex: '#00ffff'
    },
    id: 3
  },
  {
    color: 'aquamarine',
    code: {
      hex: '#7fffd4'
    },
    id: 4
  }
]}

test("Fetches data and renders the bubbles", async() => {
  // Finish this test
  const mockedWithAuth = jest.spyOn(mockAxios, 'axiosWithAuth')
  mockedWithAuth.mockImplementation(() => {return axios})
  axios.get.mockResolvedValueOnce(colorList)
  render (<BubblePage />)
  await waitFor(() => {
    const aliceblue = screen.getByText('aliceblue')
    expect(aliceblue).toBeInDocument
  })
});

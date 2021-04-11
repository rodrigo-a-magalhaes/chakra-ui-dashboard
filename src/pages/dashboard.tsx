import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
// import Chart from 'react-apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:000Z',
      '2021-03-19T00:00:000Z',
      '2021-03-20T00:00:000Z',
      '2021-03-21T00:00:000Z',
      '2021-03-22T00:00:000Z',
      '2021-03-23T00:00:000Z',
      '2021-03-24T00:00:000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series1 = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];
const series2 = [
  { name: 'series1', data: [15, 12, 30, 28, 71, 8, 59] }
];

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6' >
        <Sidebar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
          <Box p={['6', '8']} bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
            <Chart options={options} series={series1} type='area' height={160} />
          </Box>
          <Box p={['6', '8']} bg='gray.800' borderRadius={8}>
            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
            <Chart options={options} series={series2} type='area' height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

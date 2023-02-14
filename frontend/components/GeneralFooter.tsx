import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import { Grid, Card, Image, Badge, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function GeneralFooter() {
    const router = useRouter();
  return (
    <div>
        <Text>
        Monday - Friday 8:00AM - 5:00PM
        Saturday 8:00 - 3:00 Sunday Closed
        </Text>
    </div>
  );
}

export default GeneralFooter;
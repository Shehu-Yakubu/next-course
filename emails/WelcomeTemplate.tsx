import React, { CSSProperties } from 'react'
import { Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
        <Preview>Welcome aboard</Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Text className='font-bold text-3xl'>Hello {name}</Text>
                    <Link href="www.w3schools.com">www.w3schools.com</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

const heading: CSSProperties = {
    fontSize: '32px'
}

export default WelcomeTemplate
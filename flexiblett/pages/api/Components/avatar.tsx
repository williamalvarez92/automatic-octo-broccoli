import React from 'react';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

// Your app...
const Flex = styled('div', { display: 'flex', justifyContent: 'center', alignItems: 'center' });

const AvatarDemo = () => (
  <Flex css={{ gap: 20 }}>
    <Avatar>
      <AvatarImage
        src="https://media-exp1.licdn.com/dms/image/C4E03AQHW8hpr_WC7sg/profile-displayphoto-shrink_400_400/0/1621101239905?e=1664409600&v=beta&t=r6WD637xPPGybeEDkuyTiPKQmvbWh2oAMJloD1kvQ3Q"
        alt="Gary Smith"
      />
      <AvatarFallback delayMs={600}>CT</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage
        src="https://media-exp1.licdn.com/dms/image/C4E03AQHRSRomhlXYug/profile-displayphoto-shrink_400_400/0/1632412338860?e=1664409600&v=beta&t=X7je-IbfTP8GKUb7cJjklk_EDxBh8Vet3Vmjmf26AhI"
        alt="William Alvarez"
      />
      <AvatarFallback delayMs={600}>JD</AvatarFallback>
    </Avatar>
  </Flex>
);

export default AvatarDemo;

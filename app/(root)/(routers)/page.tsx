'use client';

import { UserButton } from '@clerk/nextjs';
import { useStoreModal } from '../../hooks/use-store-modal';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function SetupPage() {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);
  const onClose = useStoreModal((state) => state.onClose);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}

'use client';

import { useParams, useRouter } from 'next/navigation';
import BountyDetail from '@/components/BountyDetail';
import { mockBounties, BountyType } from '@/app/bounty-board/page';

export default function BountyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const bounty = mockBounties.find((b: BountyType) => b.id === params.id);

  if (!bounty) {
    return <div>Bounty not found</div>;
  }

  return (
    <BountyDetail 
      bounty={bounty} 
      onBack={() => router.back()}
    />
  );
} 
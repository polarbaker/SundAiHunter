export type BountyType = {
  id: string;
  title: string;
  sponsorName: string;
  prize: number;
  type: 'Remote Small' | 'Remote Medium' | 'Remote Large' | 'On-site';
  deadline: string;
  status: 'Active' | 'Completed' | 'Expired';
  category: string;
}; 
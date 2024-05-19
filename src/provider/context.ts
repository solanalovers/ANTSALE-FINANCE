import {
  ListingOption,
  Project,
  ProjectType,
  LiquidityType,
  SaleType,
  Router,
  RefundType,
} from '@/interface/project-interface';
import { now } from '@internationalized/date';

export interface ProjectContext {
  form: Project;
  setForm: React.Dispatch<React.SetStateAction<Project>>;
  next: boolean;
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultProjectConfig: Project = {
  projectType: ProjectType.Presale,
  currency: 'SOL',
  feeOption: 5,
  listingOption: ListingOption.AutoListing,
  liquidityType: LiquidityType.AutoLocking,
  saleType: SaleType.Public,
  router: Router.Rayidum,
  backgroundImage: '/image/img-detail.png',
  image: '/image/token-image-1.png',
  startTime: now('America/New_York'),
  endTime: now('America/New_York'),
  refundType: RefundType.Refund,
};

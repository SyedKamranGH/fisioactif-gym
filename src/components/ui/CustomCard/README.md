# Custom Card System

Usage examples:

```
import { ServiceCard, BlogCard, TeamMemberCard } from '@/components/ui/CustomCard'

<ServiceCard
  icon={<span>💪</span>}
  title="Lorem Ipsum"
  description="Aliquam sit amet volutpat sem, eget aliquet odio."
  variant="standard"
/>

<BlogCard
  image="/public/Images/FitnessSectionLayout.png"
  title="Lorem Ipsum"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  author={{ name: 'Lorem', avatar: '/public/Logo_fisioactif-280x334.jpg' }}
  date="17 May 2023"
/>

<TeamMemberCard
  image="/public/Images/HealthSectionLayout.png"
  name="LOREM"
  role="Lorem Ipsum"
/>
```

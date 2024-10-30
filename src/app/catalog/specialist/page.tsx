import { CatalogSpecialist } from '@/widgets/catalog-specialist/CatalogSpecialist';
import { JobSlider } from '@/widgets/job-slider/JobSlider';
import React from 'react';

export default function Page() {
  return (
    <section>
      <JobSlider />
      <CatalogSpecialist />
    </section>
  );
}

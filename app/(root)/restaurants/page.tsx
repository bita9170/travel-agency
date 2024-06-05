import MaxLimitWrapper from '@/components/elements/MaxLimitWrapper'
import Options from '@/components/header/Options'
import Hero from '@/components/hero/Hero'
import Layout2 from '@/components/tiles/Layout2'
import { LocationDetails } from '@/lib/class/location'
import { getLocationDetailsByIds } from '@/lib/data/location'
import React from 'react'

function page() {
  return (
    <div>
      <Options showTitle={false}/>
      <Hero image="https://static.tacdn.com/img2/branding/homepage/home-tab3-hero-1367x520-prog.jpg" />
      <MaxLimitWrapper>
        <section>
          <h3 className="py-10">Related to restaurants you viewed</h3>
          <div className="grid md:grid-cols-4 gap-8 my-4">
            {getLocationDetailsByIds([188151, 188757, 188679, 188709]).map(
              async (location: LocationDetails) => (
                <Layout2
                  key={location.getLocationId()}
                  image={(await location.getPhotos())[0].getLarge().url}
                  ctaText={location.getName()}
                  rating={location.getRatingImageUrl()}
                  ctaLink="#"
                />
              )
            )}
          </div>

          <h3 className="py-10">Top restaurants in Lasarte-Oria</h3>
          <div className="grid md:grid-cols-4 gap-8 my-4">
            {getLocationDetailsByIds([188151, 188757, 188679, 188709]).map(
              async (location: LocationDetails) => (
                <Layout2
                  key={location.getLocationId()}
                  image={(await location.getPhotos())[0].getLarge().url}
                  ctaText={location.getName()}
                  rating={location.getRatingImageUrl()}
                  ctaLink="#"
                />
              )
            )}
          </div>
        </section>
      </MaxLimitWrapper>
    </div>
  );
}

export default page
<template>
  <header class='main_header'>
    <div class='text-background'>
      <h2>{{ merkNaam }}</h2>
      <p>{{ headerParts[0] }}</p>
      <p>{{ headerParts[1] }}</p>
      <p>{{ headerParts[2] }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',

  data() {
    return {
      headerParts: ['Welkom bij Strings of Fire, jouw online bestemming voor gitaren en muziekaccessoires. Wij zijn toegewijd\n' +
      '        aan het leveren van hoogwaardige gitaren en deskundige begeleiding, of je nu een beginner bent of een\n' +
      '        ervaren muzikant. Ontdek onze selectie en laat de muziek beginnen!',
        'Onze online winkel is ontworpen met jouw muzikale reis in gedachten. We bieden een zorgvuldig samengestelde\n' +
        '        selectie van gitaren, variërend van beginnersmodellen tot professionele instrumenten, evenals accessoires\n' +
        '        die je helpen jouw geluid te vormen. Ons team van gepassioneerde gitaristen staat klaar om hun kennis te\n' +
        '        delen en je te helpen bij het maken van de juiste keuzes.',
        'Dank je wel dat je Strings Of Fire hebt gekozen als jouw partner in muziek. Samen willen we jouw muzikale\n' +
        '        visie realiseren en een blijvende verbinding opbouwen met onze gemeenschap van muzikanten. Ontdek onze\n' +
        '        collectie en laat de muziek samenkomen!'
      ]

    }
  },

  computed: {
    merkNaam() {
      return 'Strings Of Fire'
    }
  }
}

</script>

<style>

</style>
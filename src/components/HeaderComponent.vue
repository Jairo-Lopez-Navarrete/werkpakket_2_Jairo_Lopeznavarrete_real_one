<template>
  <header class="main_header">
    <div class="text-background">
      <h2>{{merkNaam}}</h2>
      <p>{{headerPartOne}}</p>
      <p>{{headerPartTwo}}</p>
      <p>{{headerPartThree}}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",

  computed: {
    merkNaam() {
      return "Strings Of Fire"
    },
    headerPartOne(){
      return "Welkom bij Strings of Fire, jouw online bestemming voor gitaren en muziekaccessoires. Wij zijn toegewijd\n" +
        "        aan het leveren van hoogwaardige gitaren en deskundige begeleiding, of je nu een beginner bent of een\n" +
        "        ervaren muzikant. Ontdek onze selectie en laat de muziek beginnen!"
    },
    headerPartTwo(){
      return "Onze online winkel is ontworpen met jouw muzikale reis in gedachten. We bieden een zorgvuldig samengestelde\n" +
        "        selectie van gitaren, variërend van beginnersmodellen tot professionele instrumenten, evenals accessoires\n" +
        "        die je helpen jouw geluid te vormen. Ons team van gepassioneerde gitaristen staat klaar om hun kennis te\n" +
        "        delen en je te helpen bij het maken van de juiste keuzes."
    },
    headerPartThree(){
      return "Dank je wel dat je Strings Of Fire hebt gekozen als jouw partner in muziek. Samen willen we jouw muzikale\n" +
        "        visie realiseren en een blijvende verbinding opbouwen met onze gemeenschap van muzikanten. Ontdek onze\n" +
        "        collectie en laat de muziek samenkomen!"
    }
  }
}

</script>

<style>

</style>
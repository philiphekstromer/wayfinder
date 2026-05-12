// src/data/routes.ts


export const ROOM_DATA_STRUCTURE: Record<string, Record<string, string[]>> = {
  "Huvudentrén": {
  },
    "Personalingång lastkajen": {
    "Spinnhuset": [
      "Ta hissen eller trapporna upp till Plan 4.",
      "Ta dörren till höger och gå åt höger.", 
      "Gå i korridoren hela vägen till fikarummet i andra änden av huset.",
      "Sväng höger och gå mot korridoren som är rakt fram.",
      "Spinnhuset är den första dörren på höger sida när du kommit in i korridoren."
    ]},
     "Personalingång": {
      "Spinnhuset": [
      "Ta hissen eller trapporna upp till Plan 4.",
      "Ta dörren till höger och gå åt höger.",
      "Gå i korridoren hela vägen till fikarummet i andra änden av huset.",
      "Sväng vänster och gå rakt fram i korridoren.",
      "När du kommer till trapphuset tar du antingen vägen höger eller vänster om trapphuset men fortsätter rakt fram.",
      "Spinnhuset är sista dörren till vänster innan fikarummet."
    ]
  }
}
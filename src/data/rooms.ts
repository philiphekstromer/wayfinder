import { type Entrance } from "./types";
import plan4Image from "../assets/Plan4.png";

export const FLOOR_MAP_URLS: Record<string, string> = {
  "1": plan4Image,
  "2": plan4Image,
  "3": plan4Image,
  "4": plan4Image,
};

// Definition av typer för tydlig dokumentation
interface Route {
  steps: string[];
  mapUrl?: string; // Valfri egenskap för att inkludera en karta eller bild av vägen
}

interface Room {
  floor: number;
  routesByEntrance: Record<Entrance, Route>;
}

export const ROOM_DATA_STRUCTURE: Record<string, Room> = {
  "Varvet": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger.",
          "Varvet är direkt till vänster."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger. Sväng direkt till vänster in i korridoren.",
          "Gå rakt fram i korridoren",
          "Ta vänster in i korridoren när du kommer fram till trapphuset",
          "Ta andra korridoren till vänster när du kommer till fikarummet",
          "Varvet ligger på vänster sida efter dörren till trapphuset (personalingång)."
        ]
      }
    }
  },
  "Vattnet": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till vänster.",
          "Vattnet är direkt till höger."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger. Sväng direkt till vänster in i korridoren.",
          "Gå rakt fram i korridoren",
          "Ta vänster in i korridoren när du kommer fram till trapphuset",
          "Ta första korridoren till vänster när du kommer till fikarummet",
          "Vattnet ligger på höger sida efter dörren till trapphuset (personalingång)."
        ]
      }
    }
  },
  "Gripen": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till vänster och gå åt vänster.. Fortsätt rakt fram in i korridoren.",
          "Gripen är till vänster efter toaletterna."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger. Sväng direkt till vänster in i korridoren.",
          "Gå rakt fram i korridoren",
          "Ta höger in i korridoren när du kommer fram till trapphuset",
          "Ta första korridoren till höger när du kommer till fikarummet",
          "Gripen ligger på vänster sida efter toaletterna."
        ]
      }
    }
  },
  "Vintern": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Fortsätt i korridoren hela vägen till fikarummet i andra änden av huset.",
          "Vintern ligger på vänster sida när du har kommit fram till fikarummet."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Gå in i korridoren rakt fram.",
          "Gå hela vägen till nästa fikarum i slutet av korridoren.",
          "Sväng vänster till nästa korridor.",
          "Fortsätt rakt fram till trapphuset. Ta höger eller vänster om trapphuset men fortsätt rakt fram.",
          "Fortsätt rakt fram gneom fikarummet tills du ser Vintern."
        ]
      }
    }
  },
  "Spinnhuset": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Fortsätt i korridoren hela vägen till fikarummet i andra änden av huset.",
          "Sväng höger och gå mot korridoren som är rakt fram.",
          "Spinnhuset är den första dörren på höger sida när du kommit in i korridoren."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Gå in i korridoren rakt fram.",
          "Gå hela vägen till nästa fikarum i slutet av korridoren.",
          "Sväng vänster till nästa korridor.",
          "Fortsätt rakt fram till trapphuset. Ta höger eller vänster om trapphuset men fortsätt rakt fram.",
          "Spinnhuset ligger till vänster i slutet av korridoren, precis innan fikarummet."
        ]
      }
    }
  },
  "Bråviken VK": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och sväng direkt till höger i den första korridoren som går nedåt.",
          "Följ korridoren rakt fram.",
          "Bråviken VK ligger på vänster sida precis vid trapphus S82."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger. Sväng direkt till vänster in i korridoren.",
          "Gå rakt fram i korridoren",
          "Ta vänster in i korridoren när du kommer fram till trapphuset",
          "Bråviken VK ligger på vänster sida strax efter trapphuset."
        ]
      }
    }
  },
  "Roxen VK": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Fortsätt i korridoren hela vägen till fikarummet i andra änden av huset.",
          "Sväng höger och gå mot korridoren som är rakt fram.",
          "Fortsätt rakt fram förbi Spinnhuset och mot trapphuset.",
          "När du kommer till toaletterna tar du antingen vägen höger om trapphuset och fortsätter rakt fram.",
          "Roxen VK rakt fram när du kommer ut ur korridoren."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Gå in i korridoren rakt fram.",
          "Gå hela vägen till nästa fikarum i slutet av korridoren.",
          "Sväng vänster och gå rakt fram in i korridoren.",
          "Fortsätt fram till trapphuset. Roxen VK ligger till vänster när du kommer ut ur korridoren."
        ]
      }
    }
  },
  "Jasminen": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger.",
          "Gå i korridoren hela vägen till fikarummet i andra änden av huset.",
          "Sväng höger och gå mot korridoren som är rakt fram.",
          "Fortsätt rakt fram förbi Spinnhuset. När du kommer till toaletterna tar du antingen vägen höger eller vänster om trapphuset men fortsätter rakt fram.",
          "Fortsätt rakt fram i korridoren tills du kommer till fikarummet.",
          "Jasminen är dörren på vänster sida direkt när du kommer ut ur korridoren."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Sväng höger och gå mot köket.",
          "Sväng vänster in i korridoren vid köket. Gå hela vägen till nästa fikarum.",
          "Sväng vänster. Jasminen ligger på höger sida precis innan du kommer in i korridoren som är rakt fram."
        ]
      }
    }
  },
  "Ljuset": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå mot höger. Sväng direkt höger och gå mot korridoren.",
          "Gå rakt fram genom korridoren hela vägen ner till fikarummet på andra sidan huset.",
          "Sväng vänster i första korridoren, innan miljöstationen",
          "Ljuset är det första rummet på höger sida efter toaletterna."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Fortsätt rakt fram in i korridoren",
          "Ljuset är det första rummet på höger sida efter toaletterna."
        ]
      }
    }
  },
  "Källan": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå mot höger. Sväng direkt höger och gå mot korridoren.",
          "Gå rakt fram genom korridoren hela vägen ner till fikarummet på andra sidan huset.",
          "Sväng vänster i andra korridoren, efter köket",
          "Källan är det första rummet på vänster sida efter toaletterna."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Sväng höger och gå mot köket.",
          "Sväng vänster in i korridoren. Källan är det första rummet på vänster sida efter toaletterna."
        ]
      }
    }
  },
  "Bladet": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå mot höger. Sväng höger när du kommer ut till öppna ytan.",
          "Gå rakt fram genom korridoren hela vägen ner till fikarummet på andra sidan huset.",
          "Sväng vänster i första korridoren, innan miljöstationen",
          "Bladet ligger på höger sida, efter att du passerat toaletterna och Ljuset."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Fortsätt rakt fram in i korridoren",
          "Bladet ligger på höger sida, efter att du passerat toaletterna och Ljuset."
        ]
      }
    }
  },
  "Täppan": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå mot höger. Sväng höger när du kommer ut till öppna ytan.",
          "Gå rakt fram genom korridoren hela vägen ner till fikarummet på andra sidan huset.",
          "Sväng vänster i första korridoren, innan miljöstationen",
          "Täppan ligger på höger sida i slutet av korridoren."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Fortsätt rakt fram in i korridoren",
          "Täppan ligger på höger sida i slutet av korridoren."
        ]
      }
    }
  },
  "Spetsen": {
    floor: 4,
    routesByEntrance: {
      "Personalingång lastkajen": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå mot höger. Sväng direkt höger och gå mot korridoren.",
          "Gå rakt fram genom korridoren hela vägen ner till fikarummet på andra sidan huset.",
          "Sväng vänster i andra korridoren, efter köket",
          "Spetsen ligger på höger sida i slutet av korridoren."
        ]
      },
      "Personalingång": {
        steps: [
          "Ta hissen eller trapporna upp till Plan 4.",
          "Ta dörren till höger och gå åt höger. Sväng höger och gå mot köket.",
          "Sväng vänster in i korridoren vid köket. Spetsen ligger på vänster sida i slutet av korridoren."
        ]
      }
    }
  }
};

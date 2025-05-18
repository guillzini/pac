function FindProxyForURL(url, host) {
    // Existing whitelisted domains
    if (dnsDomainIs(host, ".magister.nl") || host == "magister.nl") {
        return "DIRECT";
    }
    if (dnsDomainIs(host, ".magister.net") || host == "magister.net") {
        return "DIRECT";
    }
    
    // Newly added whitelisted domains
    if (dnsDomainIs(host, ".windows.net") || host == "windows.net") {
        return "DIRECT";
    }
    if (dnsDomainIs(host, ".kennisnet.nl") || host == "kennisnet.nl") {
        return "DIRECT";
    }
    if (dnsDomainIs(host, ".malmberg.nl") || host == "malmberg.nl") {
        return "DIRECT";
    }
    if (dnsDomainIs(host, ".publitas.com") || host == "publitas.com") {
        return "DIRECT";
    }

    // Wildcard for all subdomains of the added domains
    if (shExpMatch(host, "*.windows.net") || shExpMatch(host, "windows.net")) {
        return "DIRECT";
    }
    if (shExpMatch(host, "*.magister.nl") || shExpMatch(host, "magister.nl")) {
        return "DIRECT";
    }
    if (shExpMatch(host, "*.magister.net") || shExpMatch(host, "magister.net")) {
        return "DIRECT";
    }
    if (shExpMatch(host, "*.kennisnet.nl") || shExpMatch(host, "kennisnet.nl")) {
        return "DIRECT";
    }
    if (shExpMatch(host, "*.malmberg.nl") || shExpMatch(host, "malmberg.nl")) {
        return "DIRECT";
    }
    if (shExpMatch(host, "*.publitas.com") || shExpMatch(host, "publitas.com")) {
        return "DIRECT";
    }

    // MS Office and OneDrive domains

    if (dnsDomainIs(host, "office.com") || host == "office.com") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.office.com") || shExpMatch(host, "office.com")) {
    return "DIRECT";
    }

    if (dnsDomainIs(host, "office365.com") || host == "office365.com") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.office365.com") || shExpMatch(host, "office365.com")) {
    return "DIRECT";
    }

    if (dnsDomainIs(host, "live.com") || host == "live.com") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.live.com") || shExpMatch(host, "live.com")) {
    return "DIRECT";
    }

    if (dnsDomainIs(host, "microsoft.com") || host == "microsoft.com") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.microsoft.com") || shExpMatch(host, "microsoft.com")) {
    return "DIRECT";
    }

    if (dnsDomainIs(host, "onedrive.com") || host == "onedrive.com") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.onedrive.com") || shExpMatch(host, "onedrive.com")) {
    return "DIRECT";
    }

   if (dnsDomainIs(host, "sharepoint.com") || host == "sharepoint.com") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.sharepoint.com") || shExpMatch(host, "sharepoint.com")) {
    return "DIRECT";
    }

   if (dnsDomainIs(host, "msocdn.com") || host == "msocdn.com") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.msocdn.com") || shExpMatch(host, "msocdn.com")) {
    return "DIRECT";
    }

  if (dnsDomainIs(host, "microsoftonline.com") || host == "microsoftonline.com") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.microsoftonline.com") || shExpMatch(host, "microsoftonline.com")) {
    return "DIRECT";
    }

  if (dnsDomainIs(host, "office.net") || host == "office.net") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.office.net") || shExpMatch(host, "office.net")) {
    return "DIRECT";
    }

    // Noordhoff and all subdomains

    if (dnsDomainIs(host, ".noordhoff.nl") || host == "noordhoff.nl") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.noordhoff.nl") || shExpMatch(host, "noordhoff.nl")) {
    return "DIRECT";
    }

    // ThiemeMeulenhoff and all subdomains

    if (dnsDomainIs(host, ".thiememeulenhoff.nl") || host == "thiememeulenhoff.nl") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.thiememeulenhoff.nl") || shExpMatch(host, "thiememeulenhoff.nl")) {
    return "DIRECT";
    }

    // Ecservices and all subdomains
    if (dnsDomainIs(host, ".ecservices.nu") || host == "ecservices.nu") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.ecservices.nu") || shExpMatch(host, "ecservices.nu")) {
    return "DIRECT";
    }

// Toegang and all subdomains
    if (dnsDomainIs(host, ".toegang.org") || host == "toegang.org") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.toegang.org") || shExpMatch(host, "toegang.org")) {
    return "DIRECT";
    }

   // Google forms and docs
if (shExpMatch(host, "forms.gle")) {
    return "DIRECT";
}
if (shExpMatch(host, "docs.google.com")) {
    return "DIRECT";
}

// Last semester
    if (dnsDomainIs(host, ".digit-vo.nl") || host == "digit-vo.nl") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.digit-vo.nl") || shExpMatch(host, "digit-vo.nl")) {
    return "DIRECT";
    }

    if (dnsDomainIs(host, ".msftauth.net") || host == "msftauth.net") {
    return "DIRECT";
    }
    if (shExpMatch(host, "*.msftauth.net") || shExpMatch(host, "msftauth.net")) {
    return "DIRECT";
    }


    // Default failure proxy for all other domains
    return "PROXY 0.0.0.0:8080";
}

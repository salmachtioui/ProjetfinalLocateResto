package com.example.projetRestaurant.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor


@Entity
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
	@Column(unique = true,nullable = false)  
    private String nom;
    private String adresse;

    private double latitude;
    private double longitude;
    private String rank;

    @Temporal(TemporalType.TIME)
    @JsonFormat(pattern="HH:mm")
    private Date heureOpen;
    public int getEtat() {
		return etat;
	}

	public void setEtat(int etat) {
		this.etat = etat;
	}


	@Temporal(TemporalType.TIME)
    @JsonFormat(pattern="HH:mm")
    private Date heureClose;
    private int etat;
    private String URL;



    //Serie

    @ManyToOne
    @JoinColumn(name = "serie_id")
    @JsonIgnoreProperties(value = {"restaurants", "hibernateLazyInitializer"})
    private Serie serie;

    @ManyToOne
    @JoinColumn(name = "zone_id")
    @JsonIgnoreProperties(value = {"restaurants", "hibernateLazyInitializer"})
    private Zone zone;
    public Serie getSerie() {
        return serie;
    }

    public void setSerie(Serie serie) {
        this.serie = serie;
    }
    //Fin Serie


    @ManyToMany(fetch = FetchType.LAZY)
    private Set<Specialite> specialite;


    //Photo
    @JsonIgnore
    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Photo> photos;


    //Fin Photo


    public Zone getZone() {
        return zone;
    }

    public void setZone(Zone zone) {
        this.zone = zone;
    }

    public Long getId() {
        return id;
    }

    public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public String getRank() {
		return rank;
	}

	public void setRank(String rank) {
		this.rank = rank;
	}

	public Date getHeureOpen() {
		return heureOpen;
	}

	public void setHeureOpen(Date heureOpen) {
		this.heureOpen = heureOpen;
	}

	public Date getHeureClose() {
		return heureClose;
	}

	public void setHeureClose(Date heureClose) {
		this.heureClose = heureClose;
	}

	public Set<Specialite> getSpecialite() {
		return specialite;
	}

	public void setSpecialite(Set<Specialite> specialite) {
		this.specialite = specialite;
	}

	public Set<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(Set<Photo> photos) {
		this.photos = photos;
	}

	public void setId(Long id) {
        this.id = id;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }
    

}

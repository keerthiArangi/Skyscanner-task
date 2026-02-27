<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <net.skyscanner.backpack.card.BpkCardView
        android:id="@+id/flightCard"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        app:cornerStyle="large"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_margin="16dp">

        <LinearLayout
            android:orientation="vertical"
            android:padding="20dp"
            android:layout_width="match_parent"
            android:layout_height="wrap_content">

            <net.skyscanner.backpack.text.BpkText
                android:text="Flight Number"
                style="@style/bpkTextHeading1"/>

            <net.skyscanner.backpack.text.BpkText
                android:text="SK1234"
                style="@style/bpkTextBodyDefault"/>

        </LinearLayout>
    </net.skyscanner.backpack.card.BpkCardView>

    <net.skyscanner.backpack.card.BpkCardView
        android:id="@+id/departureCard"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        app:cornerStyle="large"
        app:layout_constraintTop_toBottomOf="@id/flightCard"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_margin="16dp">

        <LinearLayout
            android:orientation="vertical"
            android:padding="20dp"
            android:layout_width="match_parent"
            android:layout_height="wrap_content">

            <net.skyscanner.backpack.text.BpkText
                android:text="Departure"
                style="@style/bpkTextHeading1"/>

            <net.skyscanner.backpack.text.BpkText
                android:text="DEL"
                style="@style/bpkTextBodyDefault"/>

            <net.skyscanner.backpack.text.BpkText
                android:text="10:30 AM"
                style="@style/bpkTextBodyDefault"/>

        </LinearLayout>
    </net.skyscanner.backpack.card.BpkCardView>

    <net.skyscanner.backpack.card.BpkCardView
        android:id="@+id/arrivalCard"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        app:cornerStyle="large"
        app:layout_constraintTop_toBottomOf="@id/departureCard"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_margin="16dp">

        <LinearLayout
            android:orientation="vertical"
            android:padding="20dp"
            android:layout_width="match_parent"
            android:layout_height="wrap_content">

            <net.skyscanner.backpack.text.BpkText
                android:text="Arrival"
                style="@style/bpkTextHeading1"/>

            <net.skyscanner.backpack.text.BpkText
                android:text="BLR"
                style="@style/bpkTextBodyDefault"/>

            <net.skyscanner.backpack.text.BpkText
                android:text="12:45 PM"
                style="@style/bpkTextBodyDefault"/>

        </LinearLayout>
    </net.skyscanner.backpack.card.BpkCardView>

</androidx.constraintlayout.widget.ConstraintLayout>

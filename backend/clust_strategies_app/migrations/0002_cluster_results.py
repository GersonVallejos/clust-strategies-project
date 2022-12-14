# Generated by Django 4.1 on 2022-10-10 20:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("clust_strategies_app", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Cluster_Results",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("cluster", models.CharField(max_length=10)),
                ("aux_id", models.CharField(max_length=250)),
                ("Gender", models.CharField(max_length=250)),
                ("Ever_Married", models.CharField(max_length=250)),
                ("Age", models.CharField(max_length=250)),
                ("Graduated", models.CharField(max_length=250)),
                ("Profession", models.CharField(max_length=250)),
                ("Work_Experience", models.CharField(max_length=250)),
                ("Spending_Score", models.CharField(max_length=250)),
                ("Family_Size", models.CharField(max_length=250)),
                ("Var_1", models.CharField(max_length=250)),
                (
                    "dataset_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="clust_strategies_app.dataset",
                    ),
                ),
            ],
        ),
    ]

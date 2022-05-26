using Microsoft.EntityFrameworkCore.Migrations;

namespace Cars.Migrations
{
    public partial class AddVehicleChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VehicleFeature_Vehicles_VehicleId",
                table: "VehicleFeature");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VehicleFeature",
                table: "VehicleFeature");

            migrationBuilder.RenameTable(
                name: "VehicleFeature",
                newName: "VehicleFeatures");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VehicleFeatures",
                table: "VehicleFeatures",
                columns: new[] { "VehicleId", "FeatureId" });

            migrationBuilder.AddForeignKey(
                name: "FK_VehicleFeatures_Vehicles_VehicleId",
                table: "VehicleFeatures",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VehicleFeatures_Vehicles_VehicleId",
                table: "VehicleFeatures");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VehicleFeatures",
                table: "VehicleFeatures");

            migrationBuilder.RenameTable(
                name: "VehicleFeatures",
                newName: "VehicleFeature");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VehicleFeature",
                table: "VehicleFeature",
                columns: new[] { "VehicleId", "FeatureId" });

            migrationBuilder.AddForeignKey(
                name: "FK_VehicleFeature_Vehicles_VehicleId",
                table: "VehicleFeature",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

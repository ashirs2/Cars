using Microsoft.EntityFrameworkCore.Migrations;

namespace Cars.Migrations
{
    public partial class AddVehicleFeatureChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_VehicleFeatures_FeatureId",
                table: "VehicleFeatures",
                column: "FeatureId");

            migrationBuilder.AddForeignKey(
                name: "FK_VehicleFeatures_Features_FeatureId",
                table: "VehicleFeatures",
                column: "FeatureId",
                principalTable: "Features",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VehicleFeatures_Features_FeatureId",
                table: "VehicleFeatures");

            migrationBuilder.DropIndex(
                name: "IX_VehicleFeatures_FeatureId",
                table: "VehicleFeatures");
        }
    }
}

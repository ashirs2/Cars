using Microsoft.EntityFrameworkCore.Migrations;

namespace Cars.Migrations
{
    public partial class AddPhotos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photo_Vehicles_VehicleId",
                table: "Photo");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Photo",
                table: "Photo");

            migrationBuilder.RenameTable(
                name: "Photo",
                newName: "Photos");

            migrationBuilder.RenameIndex(
                name: "IX_Photo_VehicleId",
                table: "Photos",
                newName: "IX_Photos_VehicleId");

            migrationBuilder.AlterColumn<int>(
                name: "VehicleId",
                table: "Photos",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Photos",
                table: "Photos",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Vehicles_VehicleId",
                table: "Photos",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Vehicles_VehicleId",
                table: "Photos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Photos",
                table: "Photos");

            migrationBuilder.RenameTable(
                name: "Photos",
                newName: "Photo");

            migrationBuilder.RenameIndex(
                name: "IX_Photos_VehicleId",
                table: "Photo",
                newName: "IX_Photo_VehicleId");

            migrationBuilder.AlterColumn<int>(
                name: "VehicleId",
                table: "Photo",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Photo",
                table: "Photo",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Photo_Vehicles_VehicleId",
                table: "Photo",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
